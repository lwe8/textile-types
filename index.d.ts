// JSON ML Tree
export interface JMLAttributes {
  [key: string]: string | undefined | Record<string, string | undefined>;
  style?: string;
  lang?: string;
  href?: string;
  title?: string;
  alt?: string;
  src?: string;
  colspan?: string;
  rowspan?: string;
  class?: string;
  id?: string;
}
type JEOne =
  | JMLAttributes
  | string
  | string[]
  | JMLElement
  | JMLElement[]
  | JMLNode
  | JMLNodes;
export type JMLElement = [TagName, JEOne, ...JMLNode[]];
export type JMLNode = string | JMLElement;
export type JMLNodes = JMLNode[];
export interface JMLVisitor {
  visitElement?(node: JMLElement, index?: number, parent?: JMLNodes): void;
  visitText?(node: string, index?: number, parent?: JMLNodes): void;
}
// JSON ML Tree End
export type TagName =
  | "a"
  | "abbr"
  | "address"
  | "area"
  | "article"
  | "aside"
  | "audio"
  | "b"
  | "bdi"
  | "bdo"
  | "blockquote"
  | "body"
  | "br"
  | "button"
  | "canvas"
  | "caption"
  | "cite"
  | "code"
  | "col"
  | "colgroup"
  | "data"
  | "datalist"
  | "dd"
  | "del"
  | "details"
  | "dfn"
  | "dialog"
  | "div"
  | "dl"
  | "dt"
  | "em"
  | "embed"
  | "fieldset"
  | "figcaption"
  | "figure"
  | "footer"
  | "form"
  | "h1"
  | "header"
  | "hgroup"
  | "hr"
  | "i"
  | "iframe"
  | "img"
  | "input"
  | "ins"
  | "kbd"
  | "label"
  | "legend"
  | "li"
  | "main"
  | "map"
  | "mark"
  | "menu"
  | "meter"
  | "nav"
  | "noscript"
  | "object"
  | "ol"
  | "optgroup"
  | "option"
  | "output"
  | "p"
  | "picture"
  | "pre"
  | "progress"
  | "q"
  | "rp"
  | "rt"
  | "ruby"
  | "s"
  | "samp"
  | "search"
  | "section"
  | "select"
  | "slot"
  | "small"
  | "source"
  | "span"
  | "strong"
  | "sub"
  | "summary"
  | "sup"
  | "table"
  | "tbody"
  | "td"
  | "template"
  | "textarea"
  | "tfoot"
  | "th"
  | "thead"
  | "time"
  | "tr"
  | "track"
  | "u"
  | "ul"
  | "var"
  | "video"
  | "wbr";

export const Name: string;
