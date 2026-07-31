function genId (componentName = "", elementName = "") {
    return `id-${Math.random().toString().substring(2, 6)}-sit-${componentName}-${elementName}`;
}

export { genId as default };
//# sourceMappingURL=generateId.js.map
