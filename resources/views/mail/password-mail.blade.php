@component('mail::message')
<div>
    Email пользователя: {{ $email }}
</div>
<div>
    Номер пользователя: {{ $number }}
</div>
<div>
    Сообщение пользователя: {{ $text }}
</div>

@endcomponent
