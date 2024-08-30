import {
  TipoMedida,
  TipoDocumento,
  UserRole,
  EstadoPedido,
  UnidadDescuento,
  DiaSemana,
  TipoPromocion,
} from "@prisma/client";

export interface CategoriaInsumo {
  id_cat_insumo: string;
  nombre: string;
  activo: boolean;
}

export interface Insumo {
  id_insumo: string;
  img_url: string;
  nombre: string;
  cantidad: number;
  medida?: TipoMedida;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
  cat_insumo: CategoriaInsumo;
}

export interface CategoriaProducto {
  id_cat_producto: string;
  nombre: string;
  indicacion?: string;
  activo: boolean;
}

export interface Producto {
  id_producto: string;
  img_url: string;
  nombre: string;
  descripcion?: string;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
  cat_producto: CategoriaProducto;
}

export interface CategoriaPromocion {
  id_cat_promocion: string;
  nombre: string;
  activo: boolean;
}

export interface Promocion {
  id_promocion: string;
  img_url: string;
  nombre: string;
  descripcion: string;
  precio_oferta: number;
  ahorro?: number;
  estado_promocion: boolean;
  tipo_promocion: TipoPromocion;
  fecha_inicio: Date;
  fecha_fin: Date;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
  cat_promocion: CategoriaPromocion;
}

export interface DescuentoCategoriaProducto {
  id_descuento_categoria: string;
  valor_descuento: number;
  unidad_descuento: UnidadDescuento;
  cantidad_minima_orden: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  cat_producto: CategoriaProducto;
}

export interface ComboPromocion {
  id_combo_promocion: string;
  nombre_opcion?: string;
  cantidad_incluida: number;
  promocion: Promocion;
}

export interface Elegible {
  id_elegible: string;
  nombre: string;
  precio_extra: number;
  activo: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  tipo_elegible?: TipoElegible;
}

export interface Pedido {
  id_pedido: string;
  estado_pedido: EstadoPedido;
  fecha_emision?: Date;
  metodo_pago: MetodoPago;
  nota?: string;
  impuesto: number;
  total: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PedidoDetalleProducto {
  id_pedido_det_prod: string;
  cantidad: number;
  subtotal: number;
  producto_tamanio?: ProductoTamanio;
}

export interface PedidoDetallePromocion {
  id_pedido_det_promo: string;
  cantidad: number;
  subtotal: number;
  promocion?: Promocion;
}

export interface ProductoTamanio {
  id_producto_tamanio: string;
  img_url: string;
  tamanio: string;
  precio_base: number;
  precio_puntos?: number;
  activo: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  producto?: Producto;
}

export interface TipoElegible {
  id_tipo_elegible: string;
  nombre: string;
  activo: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface User {
  id: string;
  name?: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  password?: string;
  puntos: number;
  rol: UserRole;
  telefono?: string;
  fecha_nacimiento?: Date;
  direccion?: string;
  documento?: string;
  tipo_documento: TipoDocumento;
  activo: boolean;
  createdAt: Date;
  updateAt: Date;
}

export interface Account {
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  sessionToken: string;
  userId: string;
  expires: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}
