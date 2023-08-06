import { Comment } from "./comment";

export class News{
  id: number;
  caption: string;
  comments: Array<Comment>
}
