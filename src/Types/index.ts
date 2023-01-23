export type FiltersType = {
    id: number;
    nome: string;
    cor: string;
}

export type ItemType = {
    id: number;
    title: string;
    contents: string;
    img: string | null;
    referenceLink: string[] | null;
    date: string;
    category: string;
}