export type Filters = {
    id: number;
    nome: string;
    cor: string;
}

export type Item = {
    id: string;
    title: string;
    contents: string;
    resource?: Resource
    referenceLinks?: string[];
    createdAt: string;
    category: string;
    author: string | User;

}

export type Resource = {
    secure_url: string;
    resource_type: string;
    etag: string;
}

export type User = {
    nome: string;
    cargo: string;
    identificacao: string | null;
    email: string;
    celular: string;
    senha: string;
    confirmeSenha: string;
}

