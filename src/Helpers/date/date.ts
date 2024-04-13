
export const FormatDate = (date:Date):string => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }
  
    return date.toLocaleDateString('en-us', options)
  
  }