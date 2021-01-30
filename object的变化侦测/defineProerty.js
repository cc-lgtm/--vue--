/*** 

let _default = 0;

Object.defineProperty(window, 'a', {
    get: function() {
        return ++_default
    }
})

if(a === 1 && a === 2 && a === 3) {
    console.log(a)
    console.log('You win!!!')
}

***/


/***

let _default = null

Object.defineProperty(window, 'a', {
    get: function() {
        return _default
    },
    set: function(newValue) {
        if(newValue === 'Object' || newValue === 'Array') {
            _default = {
                type: newValue,
                length: newValue.length
            }
        } else {
            throw new TypeError('This type is invalid')
        }
    }
})
 

a = 'Object'
console.log(a)
a = 'Array'
console.log(a)
a = '123'

***/


/***

Object.defineProperty(window, '_', {
    get: function() {
        this._code = this._code || 'a'.charCodeAt(0)
        var _char = String.fromCharCode(this._code)

        if(this._code >= 'a'.charCodeAt(0) + 26) {
            return ''
        } else {
            this._code ++
        }
        return _char
    }
})

console.log(_ + _ + _ + _ + _ + _ + _ +_ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _+ _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _)

***/


/***

var _obj = {
    a: 1,
    b: 2,
    c: 3
}

var obj = {}

for(var k in _obj) {
    Object.defineProperty(obj, k, {
        enumerable: true,
        writable: k === 'b' ? false : true,
        configurable: true,
        value: ++_obj[k]
    })
}

for(var k in obj) {
    obj[k] += 1
}

delete obj.a

console.log(obj)

***/

