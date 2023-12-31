import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from ".";

const Videos = ({ videos, direction }) => {
  // Check if videos is an array and not undefined
  if (!Array.isArray(videos)) {
    return null; // Or you can return an error message or handle it differently
  }

  return (
    <Stack
      direction={direction || "row"}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
