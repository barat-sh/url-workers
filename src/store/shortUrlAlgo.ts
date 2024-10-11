import { v4 as uuidv4 } from "uuid";

export function generateShortUrl() {
    const shortUrlId = uuidv4().slice(0, 6); // Generate a 6-character UUID
    return shortUrlId;
}