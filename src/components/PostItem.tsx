import { Dimensions, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import fonts from "../styles/fonts";

interface PostItemProps extends TouchableOpacityProps {
  post: {
    id:string,
    author: string,
    title:string,
    created:number,
    score:number,
    thumbnail:string,
    thumbnail_height: number,
    thumbnail_width: number,
    num_comments: number,
    permalink:string,
    url: string,
  }
} 

export const PostItem = ({post, ...rest}:PostItemProps) => {


  function getTimeSinceCreation(createdAt:number) {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - createdAt * 1000;
    const hoursSinceCreation = timeDifference /  1000 / 60 / 60;
    
    if (hoursSinceCreation >= 24) {
      const daysSinceCreation = Math.floor(hoursSinceCreation / 24);
      return  daysSinceCreation > 1 ? `há ${daysSinceCreation} dias` : `há ${daysSinceCreation} dia`;
    }
  
    if (hoursSinceCreation < 2) {
      return `há ${Math.floor(hoursSinceCreation)} hora`;
    }

    return `há ${Math.floor(hoursSinceCreation)} horas`;
  }

  function parseToK(num:number) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  }


  return(
  <TouchableOpacity 
    style={styles.container}
    activeOpacity={0.2}
    {...rest}
  >
    <View style={styles.infoArea}>
      <Text style={styles.author}>Enviado por u/{post.author}</Text>
      <Text style={styles.author}>  {getTimeSinceCreation(post.created)}</Text>
    </View>

    <View style={styles.titleArea}>
      <Text style={styles.title}>{post.title}</Text>
    </View>   
    <Image
      source={{uri: post.url}}
      style={{
        height: 512,
        width: '100%',
        // maxHeight: 512,
        // maxWidth: '100%',
        resizeMode: 'cover'
      }}
    />
      <View style={styles.authorInfos}>

        <View style={styles.scoreArea}>
          <MaterialCommunityIcons name="arrow-up-bold-outline" size={20} color="#ccc" />
          <Text style={styles.score}>{parseToK(post.score)}</Text>
          <MaterialCommunityIcons name="arrow-down-bold-outline" size={20} color="#ccc" />
        </View>


        <View style={styles.commentsArea}>  
          <FontAwesome5 name="comment-alt" size={17}  color="#ccc" />
          <Text style={styles.comments}>{parseToK(post.num_comments)} Comentários</Text>
        </View>

      </View>
  </TouchableOpacity>
  )
};

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width,
    paddingTop:8,
    // backgroundColor: 'red',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: "#ccc",
    
  },
  titleArea: {
    // backgroundColor: 'green',
    width:'100%',
    marginVertical:10,
    paddingHorizontal:8,

  },
  title: {
    fontSize: 17,
    fontFamily: fonts.semibold,
    color: '#22222',
    textAlign: 'left',

  }, 
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    width:'100%',
    // height:100,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    // justifyContent: 'center',
    // backgroundColor: 'green',
  },
  createdAt: {
    alignSelf: 'flex-end'
  },
  authorInfos: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
  author: {
    fontFamily: fonts.semibold,
    color: '#878787'
  },
  scoreArea: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  score: {
    paddingHorizontal: 5,
    fontFamily: fonts.bold,
    color: '#000',
  },
  commentsArea: {
    marginTop:3,
    // backgroundColor: 'red',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  comments: {
    fontFamily: fonts.bold,
    color: '#878787',
    marginLeft: 8,
    marginBottom: 5,
  }
})