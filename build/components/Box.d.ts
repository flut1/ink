import type { FC } from 'react';
import type { Except } from 'type-fest';
import type { Styles } from '../styles';
export declare type Props = Except<Styles, 'textWrap'> & {
    /**
     * Margin on all sides. Equivalent to setting `marginTop`, `marginBottom`, `marginLeft` and `marginRight`.
     *
     * @default 0
     */
    readonly margin?: number;
    /**
     * Horizontal margin. Equivalent to setting `marginLeft` and `marginRight`.
     *
     * @default 0
     */
    readonly marginX?: number;
    /**
     * Vertical margin. Equivalent to setting `marginTop` and `marginBottom`.
     *
     * @default 0
     */
    readonly marginY?: number;
    /**
     * Padding on all sides. Equivalent to setting `paddingTop`, `paddingBottom`, `paddingLeft` and `paddingRight`.
     *
     * @default 0
     */
    readonly padding?: number;
    /**
     * Horizontal padding. Equivalent to setting `paddingLeft` and `paddingRight`.
     *
     * @default 0
     */
    readonly paddingX?: number;
    /**
     * Vertical padding. Equivalent to setting `paddingTop` and `paddingBottom`.
     *
     * @default 0
     */
    readonly paddingY?: number;
};
/**
 * `<Box>` is an essential Ink component to build your layout. It's like `<div style="display: flex">` in the browser.
 */
declare const Box: FC<Props>;
export default Box;
