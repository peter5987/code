let input = [1 ,[2,3,null,4], [null], 5]
let output = []

function flatten(input) {
    for (let item of input) {
        if (item == null) {
            continue
        }
    }if(Array.isArray(item)){
        let innerOutput = flatten(item)
        output.pushManager(...innerOutput)
    
    }
}