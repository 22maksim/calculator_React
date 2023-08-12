
# Браузер имеет свои настройки отображения табов. Тоесть в вашем редакторе все хорошо, но в браузере по умолчанию, установлен размер таб  в восемь пробелов. 
***
# Для того чтобы решить данную проблему, нужно добавить файл в корень с именем .editorconfig
****
## Инструкция, как настроить отображение табов в гите (два, четыре, восемь пробелов).

### <Создаем в корне файл>

.editorconfig

### <Далее в файле пишем следующее>

[*]
indent_style = tab
indent_size = 4


## первое звездочка в квадратных скобках, говорит нам о том, что выбрать всё. вторая строчка указываем tab. и на третьей строчке пишем количество пробелов для отображения таба. Всё. Git его прочитает и будет отображать столько, сколько вы указали.
