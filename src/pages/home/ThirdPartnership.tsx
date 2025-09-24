import imageOne from '../../assets/3d-blue-sale-poster-illustration-260nw-2057514026.jpg'
import imageTwo from '../../assets/online-shopping-horizontal-banner-illustration_1284-57252.avif'

function ThirdPartnership() {
  //   const images = [
  //     'https://www.google.com/search?q=sale+banner+ad+shop+now&sca_esv=1c2c48b035966a68&udm=2&cs=1&hl=en&biw=1536&bih=695&sxsrf=AE3TifOCq-k-m08PGpyExSuzwOiFj6MTRA%3A1755694391967&ei=N8WlaIfrOs2RkdUPuvmyuAk&ved=0ahUKEwjH4sSkt5mPAxXNSKQEHbq8DJcQ4dUDCBE&uact=5&oq=sale+banner+ad+shop+now&gs_lp=EgNpbWciF3NhbGUgYmFubmVyIGFkIHNob3Agbm93SJ07UABYpDhwAHgAkAEAmAEAoAEAqgEAuAEDyAEA-AEBmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcA&sclient=img#imgrc=ZZy_6u2Zjee7CM&imgdii=9tHIOpbSqSoAEM',
  //     'https://www.google.com/search?q=shop+now+banner+ad&sca_esv=1c2c48b035966a68&udm=2&biw=1536&bih=695&sxsrf=AE3TifNuivdRAvZgnTCsyxi0jMxqaQFC1A%3A1755694224992&ei=kMSlaIGrPPjMkdUPzZqCmAw&ved=0ahUKEwiBs_XUtpmPAxV4ZqQEHU2NAMMQ4dUDCBE&uact=5&oq=shop+now+banner+ad&gs_lp=EgNpbWciEnNob3Agbm93IGJhbm5lciBhZEicJlCMEliTIXAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCIBgGSBwCgBwCyBwC4BwDCBwDIBwA&sclient=img#imgrc=Xhur8Bed7BIPZM&imgdii=R-Um8WAo697r4M',
  //     'https://www.google.com/search?q=shop+now+banner+ad&sca_esv=1c2c48b035966a68&udm=2&biw=1536&bih=695&sxsrf=AE3TifNuivdRAvZgnTCsyxi0jMxqaQFC1A%3A1755694224992&ei=kMSlaIGrPPjMkdUPzZqCmAw&ved=0ahUKEwiBs_XUtpmPAxV4ZqQEHU2NAMMQ4dUDCBE&uact=5&oq=shop+now+banner+ad&gs_lp=EgNpbWciEnNob3Agbm93IGJhbm5lciBhZEicJlCMEliTIXAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCIBgGSBwCgBwCyBwC4BwDCBwDIBwA&sclient=img#vhid=Xhur8Bed7BIPZM&vssid=mosaic',
  //   ]

  return (
    <>
      <div className="flex justify-center gap-4 p-8 pt-8">
        <img
          src={imageOne}
          alt="partnership"
          className="w-[670px] h-[300px] rounded-2xl"
        />
        <img
          src={imageTwo}
          alt="partnership"
          className="w-[670px] h-[300px] rounded-2xl"
        />
      </div>
      {/* <div className="mt-2">
        <div className="flex justify-center gap-6 flex-wrap px-10 mt-6">
          {images.slice(0, 2).map((url, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <img
                src={url}
                alt={`banner-${index}`}
                className="w-[315px] h-[180px] rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div> */}
    </>
  )
}

export default ThirdPartnership
