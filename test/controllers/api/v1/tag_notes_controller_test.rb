require 'test_helper'

class Api::V1::TagNotesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_tag_notes_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_tag_notes_destroy_url
    assert_response :success
  end

end
