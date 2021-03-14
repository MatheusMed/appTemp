export function condition(condition){
  switch(condition){
    case 'storm':
      return icon = {
        name:  'rainy-outline',
        color: '#fff'
       };
       break;

    case 'clear_day':
      return icon = {
        name:  'partly-sunny-outline',
        color: '#ffb300'
       };
       break;

    case 'rain':
      return icon = {
        name:  'rainy-outline',
        color: '#fff'
       };
       break;
    default:
        return icon = {
          name:  'cloud-outline',
          color: '#fff'
        };
  }
}