// app/screens/OrdersScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Sample data for Ongoing/Delivered orders
const ongoingDeliveredData = [
  {
    id: '1',
    productName:
      'Eco Style Gel with Cannabis Sativa Oil, Black Castor Oil & Olive Oil - 473ml (me...)',
    orderNumber: '351748246',
    quantity: '473ml',
    status: 'DELIVERED',
    date: '11-04-2021',
    image: 'https://www.famaideal.com/media/catalog/product/cache/2/thumbnail/600x600/110584b489ad505ddb03d4cf9cf008d7/a/f/afro1_1_32.jpg',
  },
  {
    id: '2',
    productName: 'Wireless Bluetooth Headphones',
    orderNumber: '351748999',
    quantity: '1 Piece',
    status: 'ONGOING',
    date: '12-04-2021',
    image: 'data:image/webp;base64,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',
  },
];

// Sample data for Canceled/Returned orders
const canceledReturnedData = [
  {
    id: '1',
    productName: 'Men’s Running Shoes',
    orderNumber: '351720000',
    quantity: '1 Pair',
    status: 'CANCELED',
    date: '09-04-2021',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBMTEhIVEBEXGBgVFxYXGBgXFRcVGhcaFxcYFxgYHiggGBsnGxUWITEhJSorLi4uGh8zODMvNyktLisBCgoKDg0OGxAQGisiICUtLystKystLzc2LTctLy0tKysvKy43Ny43Ny8uLS0tNy0vMjctKysrNy0tNTErMC0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHCAH/xAA/EAABAwICBgcECQMEAwAAAAABAAIDBBEhMQUSQVFhcQYHEyKBkaEyQrHwFCMzUnKCksHRU2KiJLLh8TRDwv/EABoBAQEBAQEBAQAAAAAAAAAAAAABAwIEBQb/xAAuEQEAAQMDAAcIAwEAAAAAAAAAAQIDEQQhMRJBUXGhsfATIjIzQ4GR0SNh4QX/2gAMAwEAAhEDEQA/AOzIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi0/S7SUlPRyyxAdoNRrS4Xa0vkbHruG0N19YjgqOxfSRiR9RLUtBaJe01cQSGl7dVo1LXvqjC19uKDdoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCzWUrJY3xSND43tLHNORa4WIUL03X/Q6WopKqTXZ9HkNNK49+RoGp2T/vStL2WPvA32FTolcI6xtOmpri294om6sYxwD2tc8kH3jex5W3pAkA65xrH/AEXcGRM3etxGpYHxUi0H1nUU7gx5fTPOA7SxaTe3ttwHjZcBnu08Nh8b+GHJYr3k7f8Av/u6D16iiHVdp/6XQM1zeWK0b75kAdx3i2wPEFS9AREQFr9L6cp6YAzyiO+IGJcRtIAxtxVnpRp5lHTumfi72WMvbXfYkDkLXPAb7X87ad6QSVEz3yO13E4nl7oGxuGAtgMgUHo7QenIKtjn079cNOq4Ws5pzxaeBWxXm/of0ikoKgTNOuw92Zn9RgOOZ7rgdZwJvtG0hehtF6QjqIWTRO1o3jWB+eN0GUiIgIiICIiAiIgIiICIiAiIgIiICIiCH9Z2nfo1IGsc5ssztRpba4A7zibg93Jp/EuH1As7WJve5JOJJJxJO3HEnmpH1i6e+l1zi03iivFHuOq467h+J4PMNaqdGltfTto3lrKmK5pXnAPGJdA/cb3IPyeo2RFJIw7C2tfZtvstxWsljIdY+B35czuWzdG6NxY8Frmkgg4OBBsQdxBWwqKIVMLpGD6xv2rQASd0rRb9QG25tis7lyKcTPHa6ppzxyzOrXpT9CqgXX7F4DZBt1TiCBndpx8xtXoqnna9jXscHscLhwyIXkJ7i02xGy+Q2+G3JbjR/SWeJtop5Ym5lrJHAbTewNt2IG1dI9VWWr0l0ipIPtqmKO2wuBd+kXK801nSOokFn1E777HSvIvbde23cclrHVmNwAOO3HG98925BPusnpUytn+rk/07BqssDjcd51jYAk2zvg1uChtMyI3td2d9d9t/usBNsStRLUk/Oznt81dpYjcOvbgP33ckG6fC0+wRfO17gnxF25neOI29P6kNLub2tE+2p9tFsN7/AFjLHPEtP6lyeRxwcw6p3L62ScubZ/eLgARe4ubX3+IVwPWCKNdXM8r9HRGd5lkBe3XN9Yta8husTiSBYX4KSqAiIgIiICIiAiIgIiICIiAiIgKNdYumjS6Ome06sr7Qx2zDn4awvta3Wd+VbvSdc2GNz3Y2Fw3a47APHauZ9JaOWvitI86zTrsbkwG1rAbrG10jEjmrI7Raxwae6ABt2HksJtQQ6+IIxuNm0OFsQcPRbHpE58YbCY3R6mesLE/3DeOIUe+lkZE/PxCsie1JbpOEvbYaQibd4GH0iNotrgf1AMxtHhaLaPrnwyB7Har2+II2gjaCtayvdsNuWHwR1RfHauZiJjE8LEzE5hLpKihqDrO1qKY5lmMZJzIww8h4qk9EhIC6GphmH4R6lpJB8FFmvBHhnt/4KsOncwjG+4m1/AjkNq8s6a5TH8VyYjsmInz38W8XqJ+OiJ7sx/ng3lV0JqRk0O/A8eofZaqp6N1LPaiktwbrf7SVm6O0/UtyleBsBOuD4PvZbaHpjMPtGRvG8XYfPEei4mdbR1U1fmJ/TSI0tXXVT+JRKKlLTZws7iLHyKyPZtt4D5wzU3h6U077CSNzRxDZG/43PosqKg0fUYNERccbMdqO/SCD6LOf+hXb+baqj+43aRoaa/lXInwQEOJ225Xt62DvHYL7Vk08xw1CGybMcDy8wd+IUrrOgjTjDKWndIA4fqaAR6qMaU0VLA4NlaRf2XA3a7A+y4kWOeBxx5BejT66zf2oq37Ot572lu2t6o27Um0H05raOMMjLZGufrFrxgCbA45tBsMttztXetFVwngimAsJGNda99UkXLb7SDceC8vUlR7riCdjsA138HI8iDtU/wCgvT6SCSOKdobTOcWuBIvG44h7SM23GLeNxlZ3red2xFTG8OAc0hzSAQRiCDkQVUoCIiAiIgIiICIiAiIgLHr6xsMTpHmzWi/E7ABxJsPFZCwdN6LbUwPhc5zA61nNza5pDmncbOaMDgRcbUES0ZWvfd849txIcchf3OWwLI0rQyBl4W6xGQ97kN/JRzSFbJTXpahuo45E37GUD/2Qv2Xwuw4t5WJwaTpNPTm3tx7GuxFuBXlnTTRXNy118x1S3i7FVMU19XErlRp2J14qqAEDMObex5HEcwtFWdDqCou6nmdTuOOr7bLn+11nD9SmY6Q0FWA2ojAd/cMuTh3gsGt6CRSDXo6gcnHXb4PbiPEFdxfiNq4w59lM/DOXN6/oFVx/ZhlS3fG7vfofYnkLqM1Ub43asjHRu+69pa7yOK6jWaL0jT5xulYPeZ9YP8e8PGy10nSEPb2c8bZGjNr2h4B4B2LTyW0VRVxLOYmOXPo5fn91k2a4Y4qR1Wg6SXvRONM7djJH5HvN8CeS1FToSeLEt7Vn347vbbjbFv5gF1EoxS+3zmrRcTnlsGz4r7cO4hXqWodG8OFw4ZEC/piCMD6JOSFqKmLvZaXn+xrnH/atlT6CqXWtFIRueGtH+Zut5o/peDZszfzM/wDphxHhfkt/S6Ugf7MrDwLgD4g4r5Oo1uptfT+/Pk+rp9Hp7n1Ptx55ZXRSKZkRZOQSD3AHaxAtkXc8sStpX0Mc8To5G3afMHYRuIWml03BHnK0n7rO+7ybdabSPTq2EIDTvfZx/SDYeJ8F8SNJqtRe9rRTic5zxEPoV3rFm30Kqs9WOZR3TGj3QyvhkxA2/eafZcBrbf8AcBuxppprjVdiPdI37sNt8jtVms0jJM8vkcXOO0m7vQi2drDAEhWNfx8/+bbB+or9db6UUx0+cb4fnK+jNU9Hh1bq56wYoQ6nqHFrBcg2c7UcM26oF7HPDbzuOsaN0hHURMmheJI3i7XC4yNiCDiCCCCDkvL9LUa2eJG3b43Ga6J1ddOWUjPo07LQXLmvYCdQkWIc0Zg2GI23wN13hw7Kiw9F6UhqIxJBIJWHaLgjg5psWngQCsxRRERAREQEREBERAREQYeltFw1MRinjbLGdh2HYWnNruIxXKuk3Qaqpbvpr11NidQgGdg/CMJBxbY5YbV2FEHmUVUb727pGYN7gjAgjZjvVcVfJG67HuadhBIPmF3jpF0Moq0608A7T+qwmOX9bfa8bqC6Z6p3xtvRyfSRtjnIa/8AJKwAX/EPFXaeRHaDp3VMIDj2g3Oz8xY+ZW2PTCkqMKuma4/eID7eNg5vhdQfS2j5qd2pURSU7jgO0bYH8LxdjvArG1SLZ/ssatNbneNu5rF6uNue9Nqjo1Q1GNHUdjJsY46zT4O749VHdIUFVSu+sDmjZI03YfzDLkbLVh3Fbig6RzxjVLu1jyLH94EbrnELP2d6j4Z6Udk7T+Y/TqKrVXxRju/TCe6OX7WJriffb3H87t9r8wKwKzQpteI9s3PVIDZB4ZOyzab8FvnwxTXdTjspM3Qn2Xb9Q/t8FhG17ey4Zg71tavRc24mOYn14uLlqaN+Y7Y9eCLEbDcW2G+H8IXO338j8cdyls0EcmEzbnIPbYPHj7w4H0Wo0hol8Q1gRLF99uzg9ubDzw4rRm1JeTgS48MvDCwVTCdgt4n+fnFXi4DcE7QcTyBTAoDHH5v8dqux0g9438l8aXbGnxv+wKuhr9uHIH92nePXcmwyqaMNwaFTLEC6+uWHLMWtyKsal8CCfxXPxbvufDiqgBbLDd4ceGHjzTKJl1d9Jxo+SQlwmhl1Q5usA5pbezm3wJ7xuOWIXcdEaYgqYxJBI2Ru2x7zTuc3NpXl1r8dxyOXEbOZ8lsNH6SkieHxvdE8ZOaS12d7XHPJRXqBFyzot1p+zHWi+X1zBjl77B8W+S6bRVkczBJE9srDk5pBHpt4ILyIiAiIgIiICIiAiIgIiILdRA2RpZI1sjDm1wDmnmDgVFajq10c6TXELor3uyORzI779S9geVgpciDj/SrqzmiIfRNNVH7zC5jZW/hya8eRUIraJ0Vu3ilpje31rHMFxa4DiNU5jIr0uqZY2uaWuaHNOYIBB5gq5HmhtNkWOB2ggrMDe1s1/dl91+Qdwdx4rvA6NUVnAUlOA43NomC535KHdIurZxc6SkkaAcexkuGjLBkguQMzZwOeYAWdy3Fe/ExxLS3cmnbmJ5j15uYWc3uvFiN+YVcMxYbg/uCNxBwI4Fbero3giKpjfTT5NMgtrWAOrrDuvA1hi0m11q5aZzXFpFiMwUt3M+7VtPrePWxXRj3qd49bSx6nQsUvei1aeT7uHZOPA2JjPmOS0ddRywu1ZWFhOVxdrhh7Lg2zhkLg5AKRatsu6eKvisOr2cjWyRHNjxrNPLceIsVphmiAx2X8PH7mGOPMDeqmjh/j45am655khb2s6PNk71NYuzMLy0H8jyMdmBxwzK0NRE6N2o9nZu3OADudtXx5qAWbNX0w5exyHK+5fda3D5/CNt/Ib1ZA+QG/xz81dEXAfH4q4FTZgdvz5jZ8Vca8bx6fzz8vP52d9qpMVsvif5TAvtl+b/O8eS2uhekM9M/XgldGScQPZOPvNODsxmtCA7f8f55+aqZG47bcvm6YHa+j3WxG8BtXH2bvvx95h5t9pu3K66Bo3SUM7BJDI2Vhxu05cxm08CvLjIbbVs9D6XkpZBJDIWPHjfeHD3gbZFMJl6aRRzoD0mNfSds5nZyNe6N4F9UkAHWYTmCHDfY3FypGooiIgIiICIvmsEH1FT2g3p2g3oKkVBlG9fO2bvQXEVHbDevvaDegqRUGZu9fO3bvQW6+gimYWTRslYc2vAcPVaCt6CUjonNYxzX6pDHl8jy05jBzjhfZuUj7du9O3bvRXDNM6DnpnOE0TmsBID7XjIF+8HDCxDSbGxtmFqw0HL+QvQzp2WIJFt3DaoxpnovQTXcWCF5udaPum51jctA1SdZ5JNrnDFXKONSR2yNifJffpLwNV4EjPuuGs3wBy8FPXdBacOJdWOLbmw7PG2y5vifBQmsgdE8sfZpBIxwa7PFrjgQQL799slVxLA+g0z9joD/Ybt/S6/oQrMvR92ccscg3EljvJ2HqtjqD3m+WH/CqbTM+8W8wbeaqI7No+ZntxPHEC4823HqsbtVNIoiPZkHmvrqe/tBjudj8UwIX2qpMp3qXvoY/6Mf+KxpdHw/0gDwcf2QRgzHeqXSErfNoY3ODGQuc42tg8tx2Xyup/wBF+qxshZJVFjY8HdgwhznbQJJAbAXzDb81MjcdRtC5mj3yuAAmlL2EXuWtaGXdfi1wFti6KqY2BoDWgNaBYACwAGQAGQVS5BERAREQLL4WhfUQU9mF87IKtEFvsQnYhXEQW+xCGAK4iCyaYL4aRqvogxzSDevn0Qb1koi5YT6G+30WLPohxycFt0Qyi8/R2U5Pb6/wtXW9CZ5AQZWWPO3wU8RDpS5HP1UVGcdQxh/NbyAt6Ky3qz0kD/5FK4cQ6/o0LsSK5SZcfl6s9IuFhUU0e8jtCSN3eBCvM6tK2wBlpef1hv4aoXWkTMjlA6r6051lM3lC8/F6qZ1QPd9rpBzhubGGjy1viuqomRB9E9WNPCQe1leeJaB6BS+ioGRCzR5m6yiV8UBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k=',
  },
  {
    id: '2',
    productName: 'Smartphone Protective Case',
    orderNumber: '351720001',
    quantity: '1 Piece',
    status: 'RETURNED',
    date: '08-04-2021',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNNe4MRLM1Kb1ao0u5cShH28iYw4QgBoYEA&s',
  },
  {
    id: '3',
    productName: 'Kitchen Blender',
    orderNumber: '351720002',
    quantity: '1 Piece',
    status: 'CANCELED',
    date: '05-04-2021',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: '4',
    productName: 'Gaming Mouse',
    orderNumber: '351720003',
    quantity: '1 Piece',
    status: 'RETURNED',
    date: '03-04-2021',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XVoPQixw4Y38jZbOnDXsDJlYVGUX31A4lg&s',
  },
];

export default function OrdersScreen() {
   const navigation = useNavigation();
  // Track which tab is selected
  const [selectedTab, setSelectedTab] = useState<'ONGOING_DELIVERED' | 'CANCELED_RETURNED'>(
    'ONGOING_DELIVERED'
  );

  // Conditionally render data based on tab
  const ordersData =
    selectedTab === 'ONGOING_DELIVERED' ? ongoingDeliveredData : canceledReturnedData;

  const renderOrderItem = ({ item }: { item: typeof ongoingDeliveredData[0] }) => (
    <View style={styles.orderCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.orderInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.productName}
        </Text>
        <Text style={styles.orderNumber}>Order {item.orderNumber}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        <View style={styles.statusRow}>
          <Text
            style={[
              styles.statusText,
              item.status === 'DELIVERED' && styles.deliveredStatus,
              item.status === 'ONGOING' && styles.ongoingStatus,
              item.status === 'CANCELED' && styles.canceledStatus,
              item.status === 'RETURNED' && styles.returnedStatus,
            ]}
          >
            {item.status}
          </Text>
          <Text style={styles.dateText}>On {item.date}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>See details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
     {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
      </View>
      
      {/* Header */}
      <Text style={styles.headerText}>Orders</Text>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'ONGOING_DELIVERED' && styles.tabButtonActive,
          ]}
          onPress={() => setSelectedTab('ONGOING_DELIVERED')}
        >
          <Text
            style={[
              styles.tabButtonText,
              selectedTab === 'ONGOING_DELIVERED' && styles.tabButtonTextActive,
            ]}
          >
            Ongoing/Delivered
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'CANCELED_RETURNED' && styles.tabButtonActive,
          ]}
          onPress={() => setSelectedTab('CANCELED_RETURNED')}
        >
          <Text
            style={[
              styles.tabButtonText,
              selectedTab === 'CANCELED_RETURNED' && styles.tabButtonTextActive,
            ]}
          >
            Canceled/Returned ({canceledReturnedData.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Order List */}
      <FlatList
        data={ordersData}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 12,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    elevation: 2,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabButtonActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#ff9900', // Jumia-like orange color
  },
  tabButtonText: {
    color: '#666',
    fontWeight: '600',
  },
  tabButtonTextActive: {
    color: '#ff9900',
  },
  listContent: {
    padding: 8,
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 6,
    marginBottom: 10,
    padding: 8,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 8,
    resizeMode: 'cover',
  },
  orderInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
    color: '#333',
  },
  orderNumber: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  quantity: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 8,
  },
  deliveredStatus: {
    color: '#28a745',
  },
  ongoingStatus: {
    color: '#17a2b8',
  },
  canceledStatus: {
    color: '#dc3545',
  },
  returnedStatus: {
    color: '#6c757d',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
  detailsButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  detailsButtonText: {
    fontSize: 12,
    color: '#ff9900',
    fontWeight: 'bold',
  },
});
