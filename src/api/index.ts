// Modules
import axios from 'axios';

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljb3lkY2h3a2R1Z2Nwc3lzcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1Njk1NjksImV4cCI6MjAyNjE0NTU2OX0.xnubgy2HYDPlaPKLxtqB066EY5ouBROuJ_YPCs1aVd0';

export const axiosInstance = axios.create({ 
  baseURL:'https://icoydchwkdugcpsysrvr.supabase.co/rest/v1/',
  headers: {
    apiKey:apiKey,
    Authorization:`Bearer ${apiKey}`
  }
});

export function postCommentApi (data:PostCommentData) {
  return axiosInstance.post('/comments', data);
}

export function getCommentsApi () {
  return axiosInstance.get<GetCommentData[]>('/comments');
}

export type PostCommentData = {
  date:string;
  name: string;
  comment: string;
}

export type GetCommentData = PostCommentData & { id:number };