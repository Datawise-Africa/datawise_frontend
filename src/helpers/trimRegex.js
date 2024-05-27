class TrimRegex {
    static trimRegex = (str, regex, char) => {
        return str.replace(regex, char);
    }

    static trimAndReplace = (str, regex, char) => {
        return str.trim().replace(regex, char);
    }
}

export default TrimRegex;