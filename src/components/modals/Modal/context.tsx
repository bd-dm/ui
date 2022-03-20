import { createContext, FC, useContext, useMemo } from "react";

import isUndefined from "lodash/isUndefined";
import noop from "lodash/noop";

interface ModalContextType {
	id?: string;
	isOpened: boolean;
	closeHandler: () => void;
}

type ModalContextTypeRequired = Required<ModalContextType>;

const modalContextDefaultValue: ModalContextType = {
	isOpened: false,
	closeHandler: noop,
};

const ModalContext = createContext<ModalContextType>(modalContextDefaultValue);

const ModalContextProvider: FC<ModalContextTypeRequired> = ({
	children,
	id,
	isOpened,
	closeHandler,
}) => {
	const value = useMemo(
		() => ({ id, isOpened, closeHandler }),
		[id, isOpened, closeHandler]
	);

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};

const useModal = (): ModalContextTypeRequired => {
	const { id, ...contextValues } = useContext(ModalContext);

	if (isUndefined(id)) {
		throw new Error("Cannot use useModal outside of ModalContextProvider");
	}

	return { id, ...contextValues };
};

export { modalContextDefaultValue, ModalContextProvider, useModal };
