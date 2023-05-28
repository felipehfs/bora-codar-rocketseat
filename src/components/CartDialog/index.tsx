import { useMemo, useState } from "react";
import { Product } from "../../models/product";
import { PriceTag } from "../PriceTag";
import Stepper from "../Stepper";
import {
  Container,
  Header,
  Title,
  Button,
  List,
  ListItem,
  Image,
  ListInfo,
  ListInfoTitle,
  ListInfoFooter,
  Price,
  Resume,
  ResumeFooter,
  Label,
  ResumeBox,
  ResumePrice,
} from "./styles";
import { MdOutlineClose } from "react-icons/md";
import ResumeButton from "../Button";

type CardDialogProps = {
  products: Product[];
  onChangeUnit: (product: Product, value: number) => void;
};

const delay = async (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export default function Cartdialog({
  products,
  onChangeUnit,
}: CardDialogProps) {
  const [promotion, setPromotion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const total = useMemo(() => {
    return products.reduce((acum, item) => acum + item.price * item.unit, 0);
  }, [products]);

  const handleOnBuyProducts = async () => {
    setIsLoading(true);
    await delay(2000);
    setIsLoading(false);
  };

  return (
    <Container>
      <Header>
        <Title>
          Seu carrinho tem <strong>{products.length} itens</strong>
        </Title>
        <Button>
          <MdOutlineClose />
        </Button>
      </Header>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <Image src={product.image} alt={product.name} />
            <ListInfo>
              <ListInfoTitle>{product.name}</ListInfoTitle>
              <ListInfoFooter>
                <Price>{formatter.format(product.price)}</Price>
                <Stepper
                  onChange={(value) => onChangeUnit(product, value)}
                  value={product.unit}
                />
              </ListInfoFooter>
            </ListInfo>
          </ListItem>
        ))}
      </List>
      <Resume>
        <ResumeFooter>
          <Label>Total:</Label>
          <ResumePrice>{formatter.format(total)}</ResumePrice>
        </ResumeFooter>
        <ResumeBox>
          <PriceTag
            onChange={(value) => setPromotion(value)}
            value={promotion}
          />
        </ResumeBox>
        <ResumeButton onClick={handleOnBuyProducts} loading={isLoading}>
          Finalizar compra
        </ResumeButton>
      </Resume>
    </Container>
  );
}
