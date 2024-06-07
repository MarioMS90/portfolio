export interface Project {
  name: string;
  description: string;
  picture: ImageMetadata;
  tags: Tag[];
  demo?: string;
  source: string;
}

export interface Tag {
  name: string;
  className: string;
  icon: Function;
}
