export interface Listar {
   page: number;
   per_page: number;
   total: number;
   total_pages: number;
   data: User[];
   ad: Ad;

}

interface Ad{
    company: string;
    url: string;
    text: string;
}

interface User{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}