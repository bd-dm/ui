import { useState } from "react";

import { ModalOptions } from "../types";

interface UseModalStateResultExtended {
	openModal: () => void;
}

type UseModalStateResult = [ModalOptions, UseModalStateResultExtended];

const useModalState = (
	initialIsOpened: boolean = false
): UseModalStateResult => {
	const [isOpened, setIsOpened] = useState<boolean>(initialIsOpened);

	const closeHandler = () => {
		setIsOpened(false);
	};

	const openModal = () => {
		setIsOpened(true);
	};

	return [{ isOpened, closeHandler }, { openModal }];
};

export { useModalState };
