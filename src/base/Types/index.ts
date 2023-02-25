export type Filters = {
    id: number;
    nome: string;
    cor: string;
}

export type Item = {
    id: number;
    title: string;
    contents: string;
    img?: string;
    referenceLink?: string[];
    date: string;
    category: string;
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