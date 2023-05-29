import type { Meta, StoryObj } from "@storybook/react";
import Cartdialog from ".";
import { faker } from "@faker-js/faker";
import { Product } from "../../models/product";

const items: Product[] = [
  {
    id: 1,
    name: `Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR
    1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD`,
    price: 8599.0,
    image: "https://www.lg.com/br/images/monitores/md07549284/Gallery/D_01.jpg",
    unit: 1,
  },
  {
    id: 2,
    name: `Cadeira Gamer  RGB - Preta com Iluminação (Led)`,
    price: 959.0,
    image: faker.image.urlPicsumPhotos(),
    unit: 1,
  },
  {
    id: 3,
    name: `Teclado Gamer Mecânico Low Profile RGB AW510K 580`,
    price: 1002.0,
    image: faker.image.urlPicsumPhotos(),
    unit: 1,
  },
  {
    id: 4,
    name: `Headset preto RGB gamer`,
    price: 1002.0,
    image: faker.image.urlPicsumPhotos(),
    unit: 1,
  },
];

const meta: Meta<typeof Cartdialog> = {
  title: "Cartdialog",
  component: Cartdialog,
};

export default meta;

type Story = StoryObj<typeof Cartdialog>;

export const Default: Story = {
  args: {
    products: items,
  },
  render: (args) => <Cartdialog {...args} />,
};
