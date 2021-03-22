export declare type transforms = {
    [key: string]: any;
    delimiter(): string;
    header(block: block): string;
    paragraph(block: block): string;
    list(block: block): string;
    image(block: block): string;
    video(block: block): string;
    quote(block: block): string;
    link(block: block): string;
    embed(block: block): string;
};
export declare type block = {
    type: string;
    data: {
        service?: string;
        height?: number;
        width?: number;
        embed?: string;
        text?: string;
        level?: number;
        caption?: string;
        file?: {
            url?: string;
        };
        stretched?: boolean;
        withBackground?: boolean;
        withBorder?: boolean;
        items?: string[];
        style?: string;
        link?: string;
        meta?: {
            title?: string;
            description?: string;
            anchor?: string;
            image?: {
                url?: string;
            };
        };
    };
};
declare const transforms: transforms;
export default transforms;
