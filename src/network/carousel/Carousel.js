import { Request } from "../Request";

export function getCarousel() {
  return Request({
    url: "/banner",
    params: {
      type: 1,
    },
  });
}
