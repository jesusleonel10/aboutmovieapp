import Provider from '@/features/common/components/Provider/Provider';
import ScrollingWidget from '@/features/common/components/ScrollingWidget/ScrollingWidget';
import './WatchProvider.scss';

export default function WatchProvider({providers}) {

  //Tras obtener lo datos de la api selecciono nada mas los resultados que tenga la region VE o US
  const selectCountry = (obj) => {
    let dataProvider;

      if(obj && Object.keys(obj).some((item) => item === 'VE')){
        dataProvider = {
          region: 've',
          regionProvider: obj.VE
        }

      } else if(obj && Object.keys(obj).some((item) => item === 'US')){
        dataProvider = {
          region: 'us',
          regionProvider: obj.US
        }

      } else {
        dataProvider = {
          region: null,
          regionProvider: null
        }
      }
    return dataProvider;
  }
  
  const data = selectCountry(providers && providers.results);

  return (
    <div className="watch_provider">
        {   
        //Confirmo si regionProvider tiene los datos o esta vacio
          data.regionProvider ?
        //Si tiene los datos muestro el componente ahora si
          <>
          {data.regionProvider.flatrate &&

            <ScrollingWidget
                showHeader={true}
                textHeader='Disponible para Streaming'
                region={data.region}
                flag={true}
                idWidget='provider-streaming'
                >
                {data && data.regionProvider.flatrate.map((item, index) => {
                          return <Provider 
                          key={index}
                          logo={item.logo_path}
                          classname={'item-scrolling'}
                      />
                })}
            </ScrollingWidget>
        }
        {data.regionProvider.rent && 

        <ScrollingWidget
            showHeader={true}
            textHeader='Disponible para Alquilar'
            region={data.region}
            flag={true}
            idWidget='provider-rent'

        >
          {data && data.regionProvider.rent.map((item, index) => {
                    return <Provider 
                    key={index}
                    logo={item.logo_path}
                    classname={'item-scrolling'}
                />
          })}
        </ScrollingWidget>
        }
        {data.regionProvider.buy &&
        
        <ScrollingWidget
            showHeader={true}
            textHeader='Disponible para Comprar'
            region={data.region}
            flag={true}
            idWidget='provider-buy'

        >
          {data && data.regionProvider.buy.map((item, index) => {
                    return <Provider 
                    key={index}
                    logo={item.logo_path}
                    classname={'item-scrolling'}
                />
          })}
        </ScrollingWidget>
        }
        </>
        //Si no tenia los datos del proovedor entonces solamente muestra la card sin mas    
        : 
        <ScrollingWidget
          showHeader={true}
          textHeader='No disponible'
          region={data.region}
          showBackground={true}
          flag={false}
          idWidget='provider-null'
        >
          <Provider />
        </ScrollingWidget>
        }
    </div>     
  )
}
