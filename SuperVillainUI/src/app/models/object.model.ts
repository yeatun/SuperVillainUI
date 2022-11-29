export interface List{
    currentPage: number;
    totalPage:number;
    pageSize:number;
    count:number;
    hasPrevious:boolean;
    hasNext:boolean,
    items:[];
   
}