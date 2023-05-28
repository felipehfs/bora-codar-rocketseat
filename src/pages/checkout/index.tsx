import { useState } from "react";
import Cartdialog from "../../components/CartDialog";
import { Product } from "../../models/product";
import { Container } from "./styles";
import { faker } from "@faker-js/faker";

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

export function Checkout() {
  const [data, setData] = useState(items);

  const handleOnChangeUnit = (product: Product, value: number) => {
    const newData = data.map((item) =>
      item.id !== product.id ? item : { ...item, unit: value }
    );

    setData(newData);
  };

  return (
    <Container>
      <Cartdialog onChangeUnit={handleOnChangeUnit} products={data} />
    </Container>
  );
}
