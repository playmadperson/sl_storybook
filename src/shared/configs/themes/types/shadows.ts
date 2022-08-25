export interface Shadows {
  lifted: string;
  pressed: string;
}

export interface GlobalShadows extends Shadows {
  container: string;
  twilight: {
    drop: string;
    inner: string;
  };
  king: {
    drop: string;
  };
}
