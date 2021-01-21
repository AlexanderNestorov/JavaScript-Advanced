function fromJSONToHTMLTable(input) {

    let symbolsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        '\'': '&#39;'
    };

    function escapeSymbols(text) {
        return text
            .split("&").join(symbolsToReplace["&"])
            .split("<").join(symbolsToReplace["<"])
            .split(">").join(symbolsToReplace[">"])
            .split("\"").join(symbolsToReplace["\""])
            .split("\'").join(symbolsToReplace["'"])
    }

    let table = []
    table.push('<table>')

    let parsedObject = JSON.parse(input)
    let objectProperties = Object.keys(parsedObject[0])

    function aggregateTableHeading(properties) {
        return properties
            .map(p => `<th>${p}</th>`)
            .reduce((a, b) => {
                a.push(b)
                return a;
            }, ['  <tr>'])
            .join('')
            + '</tr>'
    }

    table.push(aggregateTableHeading(objectProperties))

    function aggregateTableRow(obj) {

        return Object.keys(obj)
            .reduce((a, b) => {
                a.push(`<td>${isNaN(obj[b]) ? escapeSymbols(obj[b]) : obj[b]}</td>`)
                return a;
            }, ['  <tr>'])
            .join('')
            + '</tr>'
    }

    parsedObject
        .map(o => aggregateTableRow(o))
        .forEach(r => table.push(r))
    table.push('</table>')

    return table.join('\n');

}