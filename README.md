# Market-React
**React-App-Market**
>![image](https://github.com/soorq/Market-React/assets/123034340/b57590e2-8664-4736-a793-6e61c5d21cfc)
>>![image](https://github.com/soorq/Market-React/assets/123034340/aa940511-4664-4877-bdf8-c6626df3d3cd)

# Version-1.01

Complete: 

- :white_check_mark: Cart
- :white_check_mark: Favorite
- :white_check_mark: Like
- :white_check_mark: Header
- :negative_squared_cross_mark: Registratition
- :negative_squared_cross_mark: Deliveiry

>Скрытие из вне области
```js
    hide(e){
        if(e && e.relatedTarget){
            e.relatedTarget.click();
        }
        this.setState({show: false});
    }
```
