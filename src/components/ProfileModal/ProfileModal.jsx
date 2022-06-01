import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
      {/* Modal content */}
      <form className='infoForm'>
          <h3>Your info</h3>

          <div>
            <input type="text" className="infoInput" name="firstname" placeholder='firstname' />
            <input type="text" className="infoInput" name="lastname" placeholder='lastname' />
          </div>
          <div>
            <input type="text" className="infoInput" name="workat" placeholder='Works At' />
          </div>
          <div>
            <input type="text" className="infoInput" name="livesIn" placeholder='Lives In' />
            <input type="text" className="infoInput" name="Country" placeholder='Country' />
          </div>
          <div>
            <input type="text" placeholder="RelationShip status" name='relationship' className="infoInput" />
          </div>
          <div>
            Profile Image
            <input type="file" name='profileImage' className="infoInput" />
            Cover Image
            <input type="file" name='coverImage' className="infoInput" />
          </div>
          <button className="button infoButton">
            update
          </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;