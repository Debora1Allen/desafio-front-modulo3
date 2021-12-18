
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formarterWord(word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
}

export function formate(value) {
    const number = new Number(value);
    return number.toLocaleString('pt-br', {
        style: 'currency', currency: 'BRL'
    });
}

export function formatDate(date) {
    const gerar = new Date(date)

    return format(gerar, 'dd/MM/yyyy');
};

export function formateWeekDay(date) {
    return format(date, 'eee', {
        locale: ptBR
    });
}