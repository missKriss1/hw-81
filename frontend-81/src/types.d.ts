export interface ILink {
    _id: string;
    originalUrl: string;
    shortUrl: string;
}

export interface LinkWithoutIdAndShirtUrl{
    originalUrl: string;
}