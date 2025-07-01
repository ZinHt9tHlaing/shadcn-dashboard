export type menuListProps = {
  group: string;
  items: {
    link: string;
    icon: React.ReactNode;
    text: string;
  }[];
};

export type menuItemProps = {
  link: string;
  icon: React.ReactNode;
  text: string;
};
