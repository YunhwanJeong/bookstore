type PartialWithRequiredField<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;

export type { PartialWithRequiredField };
