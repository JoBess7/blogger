const constCSSValues = [
    {
        '--transition-duration': '2000ms',
    },
    {
        '--color-grey1': 'rgb(190,190,190)',
    },
    {
        '--color-grey2': 'rgb(169,169,169)',
    },
    {
        '--color-grey3': 'rgb(105,105,105)',
    },
    {
        '--color-grey4': 'rgb(128,128,128)',   
    },
];

const CSSColors = [
    {
        '--text': ['rgb(14,20,27)', 'rgb(245,245,245)']
    },
    {
        '--home-top': ['rgb(199,227,244)', 'rgb(23,32,40)']
    },
    {
        '--home-bottom': ['#fff', 'rgb(14,20,27)']
    },
    {
        '--default': ['white', 'black']
    },
    {
        '--color-dark-blue': ['rgb(74,60,254)', 'rgb(82,109,239)']
    },
    {
        '--home-seven': ['rgb(90,96,114)', 'rgb(154,170,190)']
    },
    {
        '--color-categories': ['rgb(199,227,244)', 'rgb(36, 48, 59)']
    },
    {
        '--color-burger-gradient': ["rgb(255,255,255)", 'linear-gradient(61deg, rgba(14,20,27,1) 0%, rgb(43, 45, 48) 100%, rgba(23,32,40,0) 100%)']
    },
    {
        '--color-burger-background': ["linear-gradient(61deg, rgba(255,255,255,1) 0%, rgba(238,231,231,0.56) 100%, rgba(220,225,230,0.227328431372549) 100%)", 'rgb(14,20,27)']
    },
    {
        '--color-path': ['rgb(100,100,100)', 'rgb(180,180,180)']
    },
    {
        '--color-post-types-template-bottom': ['rgb(239,241,245)', 'rgb(14,20,27)']
    },
    {
        '--color-post-types-template-top': ['rgb(199,227,244)', 'rgb(14,20,27)']
    },
    {
        '--color-card': ['rgb(255, 255, 255)', '#1e262f']
    },
    {
        '--shadow1': ['rgba(0, 0, 0, 0.25) 0px 5px 15px', '0 -2px 10px rgba(0, 0, 0, 1)']
    },
    {
        '--color-gray-100:': ['hsl(225deg, 25%, 95%)', 'hsl(210deg, 15%, 20%)'] 
    },
    {
        '--color-gray-200:': ['hsl(225deg, 16%, 90%)', 'hsl(210deg, 15%, 25%)'] 
    },
    {
        '--color-gray-300:': ['hsl(225deg, 8%, 80%)', 'hsl(210deg, 10%, 40%)'] 
    },
    {
        '--color-gray-400:': ['hsl(225deg, 8%, 70%)', 'hsl(210deg, 9%, 45%)'] 
    },
    {
        '--color-gray-500:': ['hsl(225deg, 7%, 60%)', 'hsl(210deg, 8%, 50%)'] 
    },
    {
        '--color-gray-600:': ['hsl(225deg, 15%, 50%)', 'hsl(210deg, 12%, 55%)'] 
    },
    {
        '--color-gray-700:': ['hsl(225deg, 12%, 40%)', 'hsl(210deg, 14%, 66%)'] 
    },
    {
        '--color-gray-900:': ['hsl(225deg, 25%, 20%)', 'hsl(210deg, 25%, 88%)'] 
    },
    {
        '--color-gray-1000:': ['hsl(225deg, 15%, 15%)', 'hsl(210deg, 25%, 96%)'] 
    },
    {
        '--post-bottom': ['#fff', 'rgb(14,20,27)']
    },
    {
        '--post-top': ['rgb(199,227,244)', 'rgb(14,20,27)']
    },
    {
        '--tip-green-background': ['rgba(191, 252, 191, 0.589)', 'rgba(46, 121, 86, 0.397)']
    },
    {
        '--tip-green-icon': ['rgb(55, 168, 55)', 'rgb(112, 228, 112)']
    },
    {
        '--tip-blue-background': ['rgba(188, 224, 253, 0.541)', 'rgba(35, 76, 110, 0.404)']
    },
    {
        '--prism-base': ['#25414e', '#f8f8f2']
    },
    {
        '--prism-background': ['#f6f3f3', '#172028']
    },
    {
        '--prism-comment': ['#aabfc9', '#8292a2']
    },
    {
        '--prism-prolog': ['#aabfc9', '#8292a2']
    },
    {
        '--prism-doctype': ['#aabfc9', '#8292a2']
    },
    {
        '--prism-cdata': ['#39adb5', '#8292a2']
    },
    {
        '--prism-punctuation': ['#39adb5', '#f8f8f2']
    },
    {
        '--prism-namespace': ['#90a4ae', '#f8f8f2']
    },
    {
        '--prism-property': ['#0eb6c2', '#f92672']
    },
    {
        '--prism-tag': ['#e53935', '#ee5f93']
    },
    {
        '--prism-constant': ['#7c4dff', '#f92672']
    },
    {
        '--prism-symbol': ['#7c4dff', '#f92672']
    },
    {
        '--prism-deleted': ['#e53935', '#f92672']
    },
    {
        '--prism-boolean': ['#7c4dff', '#f92672']
    },
    {
        '--prism-number': ['#f76d47', '#ae81ff']
    },
    {
        '--prism-selector': ['#17242c', '#a6e22e']
    },
    {
        '--prism-attr-name': ['#1950c2', '#a6e22e']
    },
    {
        '--prism-string': ['#474545', '#e6db74']
    },
    {
        '--prism-char': ['#39adb5', '#a6e22e']
    },
    {
        '--prism-builtin': ['#39adb5', '#a6e22e']
    },
    {
        '--prism-inserted': ['#39adb5', '#a6e22e']
    },
    {
        '--prism-operator': ['#39adb5', '#f8f8f2']
    },
    {
        '--prism-entity': ['#393566', '#f8f8f2']
    },
    {
        '--prism-url': ['#e53935', '#f8f8f2']
    },
    {
        '--prism-variable': ['#e53935', '#fd971f']
    },
    {
        '--prism-atrule': ['#7c4dff', '#e6db74']
    },
    {
        '--prism-attr-value': ['#3c77b1', '#e6db74']
    },
    {
        '--prism-function': ['#ff7c4d', '#e6db74']
    },
    {
        '--prism-class-name': ['#ca3253', '#e46e86']
    },
    {
        '--prism-keyword': ['#0a14f5', '#66d9ef']
    },
    {
        '--prism-regex': ['#6182b8', '#e90']
    },
    {
        '--prism-important': ['#7c4dff', '#fd971f']
    },
    {
        '--text-gray': ['rgb(100, 100, 87)', 'rgb(189, 189, 189)']
    },
    {
        '--shadow-light-mode': ['rgba(149, 157, 165, 0.2) 0px 8px 24px', 'rgba(1,1,1,0)']
    },
    {
        '--toc-border': ['rgb(219, 219, 219)', 'rgb(177, 174, 174)']
    }
];

export {constCSSValues, CSSColors};