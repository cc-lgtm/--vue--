//Object.defineProperty侦测对象变化
function defineReactive(data, key, value) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            return value
        },
        set: function(newValue) {
            if(value === newValue) {
                return
            }
            value = newValue
        }
    })
}

export default defineReactive
