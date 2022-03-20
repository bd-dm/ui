interface WithClassName {
	className?: string;
}

interface UIComponent<AttributesType, OmittedAttributes extends string>
	extends WithClassName {
	elementProps?: Omit<AttributesType, OmittedAttributes>;
}

export type { UIComponent, WithClassName };
