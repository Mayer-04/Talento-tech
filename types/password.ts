export type Characters = {
  minusculas: string;
  mayusculas: string;
  numeros: string;
  simbolos: string;
};

export interface Options {
  lowercase?: boolean;
  uppercase?: boolean;
  numbers?: boolean;
  specials?: boolean;
}

export type OptionsKeys = keyof Options;

// TODO: Ejemplos de herencia
interface ColorTwo {
  color: string;
}

type Color = ColorTwo & {
  name: string;
};

// TUPLA
type Tupla = [number, string, boolean];
type TuplaDos = [edad: number, nombre: string, activo: boolean];
