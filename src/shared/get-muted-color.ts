export function getRandomMutedColor() {
    // Generate random values for hue, saturation, and lightness
    let hue = Math.floor(Math.random() * 360); // Hue: 0-360
    let saturation = Math.floor(Math.random() * 30) + 20; // Saturation: 20-50%
    let lightness = Math.floor(Math.random() * 30) + 40; // Lightness: 40-70%

    // Convert HSL to a CSS color string
    let color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    return color;
}