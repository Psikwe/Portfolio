export type INavbar = {};

export type IProjectCard = {
  img: string;
  caption: string;
  stack?: any[];
  description: string;
  footer?: any[];
  direction?: string;
};

export type ICard = {
  src: any;
  className: string;
  id: string;
  alt: string;
  priority: boolean;
  cardHeader: string;
  cardDescription: string;
  link?: string;
};

export type ISeo = {
  title: string;
  description: string;
  name: string;
  type: string;
};
