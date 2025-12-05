/**
 * @template TokenType token type generic
 * @description Tokenises objects to dot notation strings, eg: `surface.text.gray.normal`
 */
export type DotNotationToken<
  _TokenType,
  TokenType = Omit<_TokenType, 'name'>,
> = {
  [K in keyof TokenType]: TokenType[K] extends string | number
    ? `${Extract<K, number | string>}`
    : `${Extract<K, number | string>}.${TokenType[K] extends Record<
        string,
        string | number | boolean
      >
        ? Extract<keyof TokenType[K], number | string>
        : DotNotationToken<TokenType[K]>}`;
}[keyof TokenType];
