import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import colors from '../../../../constants/colors';

interface Props {
  latitude: number;
  longitude: number;
  title: string;
  description: string;
}

const DeliveryMap: React.FC<Props> = ({
  latitude,
  longitude,
  title,
  description,
}) => {
  return (
    <MapView
      className="z-0 -mt-10 flex-1"
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType="standard">
      <Marker
        coordinate={{
          latitude,
          longitude,
        }}
        title={title}
        description={description}
        identifier="origin"
        pinColor={colors.primary}
      />
    </MapView>
  );
};

export default DeliveryMap;
