import { useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoaderCircle, UploadCloudIcon } from "lucide-react";

interface ImageUploadProps {
  onSuccess: (url: string) => void;
  onError: (error: string) => void;
  className?: string;
  preview?: string | null;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onSuccess,
  onError,
  className,
  preview = null,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(preview);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
    maxSize: 1048576, // 1MB
    multiple: false,
    //noClick: true,
    //noKeyboard: true,
  });

  const handleUpload = async () => {
    if (!selectedFile) {
      onError("No hay archivo seleccionado");
      return;
    }

    setUploading(true);
    setUploadStatus("Subiendo...");

    try {
      const response = await axios.postForm("/api/image", {
        file_image: selectedFile,
      });
      onSuccess(response.data.url);
      setUploadStatus("Imagen subida correctamente");
    } catch (error) {
      onError("Error al subir la imagen");
      setUploadStatus("Error al subir la imagen");
    } finally {
      setUploading(false);
    }
  };
  const sizeFile = acceptedFiles.map((file, index) => {
    const fileSize = file?.size || 0;
    const fileSizeInKB = fileSize / 1024;
    const fileSizeText = `${fileSizeInKB.toFixed(2)} kB`;
    const textColor = fileSize < 1048576 ? "green" : "red";
    return (
      <span
        key={index}
        style={{ color: textColor }}
      >
        {fileSizeText}
      </span>
    );
  });

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 justify-start items-center'>
        <Button
          onClick={handleUpload}
          disabled={uploading || !selectedFile}
          size='icon'
        >
          {uploading ? (
            <LoaderCircle className='animate-spin' />
          ) : (
            <UploadCloudIcon />
          )}
        </Button>
        <span>{sizeFile}</span>
      </div>
      <div
        {...getRootProps({ className: "dropzone" })}
        className={cn(
          "flex justify-center items-center p-1 cursor-pointer",
          className
        )}
      >
        <input {...getInputProps()} />
        {previewUrl ? (
          <img
            src={previewUrl}
            alt='Preview'
            className='object-cover rounded-lg'
          />
        ) : (
          <p>Añada una imagen</p>
        )}
      </div>
      {uploadStatus && <p className='text-xs'>{uploadStatus}</p>}
    </div>
  );
};
