import { FC } from "react";

import { nanoid } from "nanoid";

import { Body, Container, Header } from "./components";
import { ModalContextProvider } from "./context";
import { ModalOptions } from "./types";

interface ModalInterface extends FC<ModalOptions> {
	Header: typeof Header;
	Body: typeof Body;
}

const Modal: ModalInterface = ({ children, isOpened, closeHandler }) => {
	const id = nanoid();

	return (
		<ModalContextProvider
			id={id}
			isOpened={isOpened}
			closeHandler={closeHandler}
		>
			<Container>{children}</Container>
		</ModalContextProvider>
	);
};

Modal.Header = Header;
Modal.Body = Body;

export { Modal };
export * from "./hooks";
