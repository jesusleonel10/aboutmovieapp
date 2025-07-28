import ScrollingWidget from "@/features/info/components/ScrollingWidget/ScrollingWidget";
import CardProfile from "@/features/info/components/CardProfile/CardProfile";

export default function Credits({credits, media}) {
  return (
    <>
      <div className="credits">
        <ScrollingWidget
          showHeader={true}
          textHeader='Reparto'
          idWidget='cast'
        >
        {
          media === 'movie' ?
            credits && credits.cast.slice(0, 12).map((item, index) => {
                return <CardProfile
                    key={index}
                    id={item.id}
                    photo={item.profile_path}
                    name={item.name}
                    character={item.character}
                />
            })
            :
            credits && credits.cast.slice(0, 12).map((item, index) => {
                return <CardProfile
                    key={index}
                    id={item.id}
                    photo={item.profile_path}
                    name={item.name}
                    // character={item.roles && item.roles.map((c) => c.character).slice(0,1)}
                    character={item.character}

                />
            })
        }
        </ScrollingWidget>
        <ScrollingWidget
            showHeader={true}
            textHeader='Directores y Escritores'
            idWidget='director-writers'
        >
        {
            media === 'tv' ?
            credits.crew && credits.crew.filter((item) => item.known_for_department === 'Directing' || item.known_for_department === 'Writing')
            .slice(0, 12)
            .sort((a, b) => b.popularity - a.popularity)
            .map((item, index) => {
                return <CardProfile
                    key={index}
                    id={item.id}
                    photo={item.profile_path}
                    name={item.name}
                    job={item.known_for_department}
                />
            })
            :
            credits.crew && credits.crew.filter((item) => item.job === 'Director' || item.job === 'Writer')
            .slice(0, 12)
            .map((item, index) => {
                return <CardProfile
                    key={index}
                    id={item.id}
                    photo={item.profile_path}
                    name={item.name}
                    job={item.job}
                />
            })
        }
        </ScrollingWidget>
      </div>
    </>
  )
}
