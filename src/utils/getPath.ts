const getPath = (file: string) => {
    return file.split("/").slice(7).join("-").replace(".md", "");
}

export default getPath;